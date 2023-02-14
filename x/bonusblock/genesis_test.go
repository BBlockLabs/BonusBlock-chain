package bonusblock_test

import (
	"testing"

	keepertest "bonusblock/testutil/keeper"
	"bonusblock/testutil/nullify"
	"bonus-block/x/bonusblock"
	"bonus-block/x/bonusblock/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.BonusblockKeeper(t)
	bonusblock.InitGenesis(ctx, *k, genesisState)
	got := bonusblock.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
