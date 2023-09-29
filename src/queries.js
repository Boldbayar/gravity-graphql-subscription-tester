const SUB_TABLE_STREAM = `subscription SubTableSream {
  queryTableLog {
    action
    on_table
    tstamp
    what {
      actype
      id
      locator
      meta
      published
      title
    }
  }
}
`;

export { SUB_TABLE_STREAM };

const SUB_POOP_HAPPENED = `
subscription {
  poopAdded {
    id
    name
  }
}
`;

const SUB_USER_BALANCE_UPDATED = `
subscription BalanceUpdated($token: String!) {
  userBalanceUpdated(token: $token) {
    currencyId
    balance
    advancedTradingLockedBalance
    advancedTradingBalance
    lockedBalance
  }
}
`;

export { SUB_POOP_HAPPENED, SUB_USER_BALANCE_UPDATED };
