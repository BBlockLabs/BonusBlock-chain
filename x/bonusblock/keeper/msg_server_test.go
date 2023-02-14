package keeper_test

import (
	"context"
	"testing"

	keepertest "bonusblock/testutil/keeper"
	"bonus-block/x/bonusblock/keeper"
	"bonus-block/x/bonusblock/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.BonusblockKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
