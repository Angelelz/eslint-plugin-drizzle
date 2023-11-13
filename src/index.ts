import type { TSESLint } from "@typescript-eslint/utils";
import deleteRule from "./enforce-delete-with-where";
import updateRule from "./enforce-update-with-where";

export const rules = {
  "enforce-delete-with-where": deleteRule,
  "enforce-update-with-where": updateRule,
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;

export const configs = {
  all: require("./configs/all"),
  recommended: require("./configs/recommended"),
};
