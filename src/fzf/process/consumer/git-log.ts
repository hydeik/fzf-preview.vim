import { gitShow } from "@/connector/git"
import { vimEchoMessage } from "@/connector/util"
import { chainFzfCommand, createBulkLineConsumer, createSingleLineConsumer } from "@/fzf/process/consumer"
import { GitLogData } from "@/type"

export const gitShowConsumer = createSingleLineConsumer(async (data) => {
  if (data.type !== "git-log") {
    throw new Error(`Unexpected data type: ${data.type}`)
  }

  await gitShow(data.hash)
  await vimEchoMessage(`git show ${data.hash}`)
})

export const chainGitLogActionsConsumer = createBulkLineConsumer(async (dataList) => {
  const gitLogData = dataList.filter((data): data is GitLogData => data.type === "git-log")
  await chainFzfCommand("FzfPreviewGitLogActions", { gitLogs: gitLogData })
})
