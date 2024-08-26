import { Modal } from "./components/Modal";
import { parseBooleanFromEnv } from "../../helpers/enviromentVariables";

type TestModeModalProps = {
  lang: string;
};

export const TestModeModal = async ({ lang }: TestModeModalProps) => {
  if (!parseBooleanFromEnv(process.env.APP_TEST_MODE)) return null;

  return <Modal lang={lang} />;
};
