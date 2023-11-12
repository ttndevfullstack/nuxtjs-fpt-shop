export default defineNuxtPlugin((nuxApp) => {
  return {
    provide: {
      sayName: (name: string) => console.log(name),
    },
  };
});
