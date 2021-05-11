   
   export const getFruit = async (name) => {
        const fruits = {
          pineapple: "🍍",
          peach: "🍑",
          strawberry: "🍓",
        };

        return fruits[name];
      };

    // getFruit("peach").then(console.log);

    export const makeSmoothie = async () => {
        try {
          const a = await getFruit("pineapple");
          const b = await getFruit("strawberry");
          const c = await getFruit("peach");
          const smoothie = Promise.all([a, b, c]);
          return smoothie;
        } catch (err) {
          console.log(err);
        }
      };
    // makeSmoothie().then(console.log);