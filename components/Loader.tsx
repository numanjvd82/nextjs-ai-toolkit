import { ClipLoader } from "react-spinners";

type Props = {
  size?: number;
  loading?: boolean;
  color?: string;
};

const Loader: React.FC<Props> = ({
  color = "#000000",
  loading = true,
  size = 35,
}) => {
  return <ClipLoader color={color} loading={loading} size={size} />;
};

export default Loader;
