import { createClient } from "graphql-ws";

const client = createClient({
  url: "ws://localhost:3000/graphql",
  options: {
    reconnect: true
  }
});

// subscription
(async () => {
  const onNext = (data) => {
    console.log(JSON.stringify(data));
  };

  let unsubscribe = () => {
    /* complete the subscription */
  };

  await new Promise((resolve, reject) => {
    unsubscribe = client.subscribe(
      {
        query: `subscription SubTableSream {
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
        `
      },
      {
        next: onNext,
        error: reject,
        complete: resolve
      }
    );
  });

  //  expect(onNext).toBeCalledTimes(5); // we say "Hi" in 5 languages
})();

// query
/*
(async () => {
  const result = await new Promise((resolve, reject) => {
    let result;
    client.subscribe(
      {
        query: '{ hello }',
      },
      {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      },
    );
  });

  expect(result).toEqual({ hello: 'Hello World!' });
})();
*/
