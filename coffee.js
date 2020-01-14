const makeCoffee = (owner) => {
  const cup = grabCup();
  pushButtonOnMachine(cup, (coffee) => {
    addSugar(coffee);
    addMilk(coffee, 2);

    giveTo(owner, coffee);
  });
};
