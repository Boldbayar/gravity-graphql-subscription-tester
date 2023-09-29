import { SubscriptionClient } from "graphql-subscriptions-client";
import { SUB_POOP_HAPPENED, SUB_USER_BALANCE_UPDATED } from "./queries";

// get ready
const GRAPHQL_ENDPOINT = "ws://trade.octagon.mn/graphql";

const query = SUB_USER_BALANCE_UPDATED;

console.log("query", query);

// set up the client, which can be reused
const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  lazy: true, // only connect when there is a query
  on: {
    connected: () => console.log("connected..."),
    error: () => console.log("error!!!")
  },
  connectionCallback: (error) => {
    error && console.error(error);
  }
});

// make the actual request
console.log("do query....");
client.request({ query });

// the above doesn't do much though

// call subscription.unsubscribe() later to clean up

const subscription = client
  .request({ query })
  // so lets actually do something with the response
  .subscribe({
    next({ data }) {
      if (data) {
        console.log("We got something!", data);
      }
    },
    error({ data }) {
      console.log("error", data);
    },
    complete({ data }) {
      console.log("complete", data);
    }
  });

console.log("subscription:", subscription);
