import { GIT_ACTIONS, GIT_BRANCH_ACTIONS, GIT_LOG_ACTIONS, GIT_STATUS_ACTIONS } from "@/const/git"

export type GitAction = typeof GIT_ACTIONS[number] | "header"
export type GitStatusAction = typeof GIT_STATUS_ACTIONS[number] | "header"
export type GitBranchAction = typeof GIT_BRANCH_ACTIONS[number] | "header"
export type GitLogAction = typeof GIT_LOG_ACTIONS[number] | "header"

export type GitBranch = {
  prefix: string
  name: string
  date: string
  author: string
}

export type GitLog = {
  prefix: string
  hash: string
  date: string
  author: string
  comment: string
}
