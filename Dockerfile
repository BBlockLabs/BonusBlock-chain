FROM golang:1.19-alpine3.15 AS builder
ARG arch=x86_64

RUN set -eux; apk add --no-cache ca-certificates build-base;

RUN apk add git

ADD https://github.com/CosmWasm/wasmvm/releases/download/v1.2.0/libwasmvm_muslc.aarch64.a /lib/libwasmvm_muslc.aarch64.a
ADD https://github.com/CosmWasm/wasmvm/releases/download/v1.2.0/libwasmvm_muslc.x86_64.a /lib/libwasmvm_muslc.x86_64.a
RUN sha256sum /lib/libwasmvm_muslc.aarch64.a | grep cba4b334893456c64df177939cbdd09afe4812432c02ae37d60d69a111b1b50d
RUN sha256sum /lib/libwasmvm_muslc.x86_64.a | grep 6f87082f7a62602f9725d529677f330b9c4dd4607887be52a86328c6c919495b

WORKDIR /code
COPY . /code/

RUN cp /lib/libwasmvm_muslc.${arch}.a /lib/libwasmvm_muslc.a

RUN LEDGER_ENABLED=false BUILD_TAGS=muslc LINK_STATICALLY=true make build
RUN echo "Ensuring binary is statically linked ..." \
  && (file /code/build/bonus-blockd | grep "statically linked")


FROM alpine:3.15
ARG MONIKER=node001
ARG CHAIN_ID=bonusblock
ARG FEE=ualtr
ARG STARTING_AMOUNT=100000000000000
ARG STARTING_STAKE=10000000000
ARG SEEDS
ARG START_WITHOUT_SEEDS

ENV CHAIN_ID=$CHAIN_ID
ENV FEE=$FEE
ENV STARTING_AMOUNT=$STARTING_AMOUNT
ENV STARTING_STAKE=$STARTING_STAKE
ENV MONIKER=$MONIKER
ENV SEEDS=$SEEDS
ENV START_WITHOUT_SEEDS=$START_WITHOUT_SEEDS

# ENV CLEAR= -- clear all data and start again

RUN apk update && apk add --no-cache curl jq && rm -rf /var/cache/apk/*

COPY --from=builder /code/build/bonus-blockd /usr/bin/bonus-blockd

WORKDIR /opt

COPY docker/ /opt/
RUN chmod +x /opt/*.sh

# rest server
EXPOSE 1317
# tendermint p2p
EXPOSE 26656
# tendermint rpc
EXPOSE 26657

ENTRYPOINT ["/opt/entrypoint.sh"]
