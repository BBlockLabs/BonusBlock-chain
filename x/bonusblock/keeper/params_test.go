package keeper_test

import (
	"testing"

	testkeeper "bonusblock/testutil/keeper"
	"bonus-block/x/bonusblock/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.BonusblockKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
