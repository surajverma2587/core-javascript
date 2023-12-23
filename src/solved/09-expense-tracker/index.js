export const expenseTracker = (transactions) => {
  const filteredTransactions = transactions.filter(
    (transaction) => transaction.amount > 0
  );

  const categorisedItems = filteredTransactions.reduce((acc, transaction) => {
    const { categoryId, category, amount, id, vendor } = transaction;

    const categoryIndex = acc.findIndex(
      (accumulatedCategory) => categoryId === accumulatedCategory.categoryId
    );

    const item = {
      id,
      amount,
      vendor,
    };

    if (categoryIndex === -1) {
      const categoryItem = {
        label: category,
        categoryId,
        total: amount,
        totalTransactions: 1,
        items: [item],
      };

      acc = [...acc, categoryItem];
    } else {
      acc[categoryIndex].items = [...acc[categoryIndex].items, item];

      acc[categoryIndex].total += amount;

      acc[categoryIndex].totalTransactions += 1;
    }

    return acc;
  }, []);

  let total = 0;

  categorisedItems.forEach((categorisedItems) => {
    categorisedItems.total = +categorisedItems.total.toFixed(2);

    total += categorisedItems.total;
  });

  return {
    categorisedItems,
    totalTransactions: filteredTransactions.length,
    total: +total.toFixed(2),
  };
};
