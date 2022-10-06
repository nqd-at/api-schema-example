import { MantineProvider, SegmentedControl, Switch } from "@mantine/core";
import { GraphQLForm } from "./components/GraphQLForm";
import { RestForm } from "./components/RestForm";
import { Section } from "./components/Section";
import { ClientContext, GraphQLClient } from "graphql-hooks";
import { useState } from "react";

const client = new GraphQLClient({
  url: "http://localhost:3000/graphql",
});

type DemoState = {
  protocol: "rest" | "graphql";
  useFrontendValidation: boolean;
};

type SegmentedControlOption = {
  value: "rest" | "graphql";
  label: string;
};

function App() {
  const [state, setState] = useState<DemoState>({
    protocol: "rest",
    useFrontendValidation: false,
  });

  const options: SegmentedControlOption[] = [
    { label: "Rest API", value: "rest" },
    { label: "GraphQL", value: "graphql" },
  ];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="h-screen max-w-2xl mx-auto">
        <div className="flex items-center p-4 space-x-4">
          <SegmentedControl
            data={options}
            value={state.protocol}
            onChange={(value) =>
              setState({ ...state, protocol: value as "rest" | "graphql" })
            }
          />
          <Switch
            label="Use frontend validation"
            onLabel="Y"
            offLabel="N"
            onChange={(e) => {
              setState({ ...state, useFrontendValidation: e.target.checked });
            }}
          />
        </div>
        <div className="h-full p-4">
          <Section>
            {state.protocol === "rest" ? (
              <RestForm useFrontendValidation={state.useFrontendValidation} />
            ) : (
              <ClientContext.Provider value={client}>
                <GraphQLForm
                  useFrontendValidation={state.useFrontendValidation}
                />
              </ClientContext.Provider>
            )}
          </Section>
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
