import { HttpStatus } from "../constant/constant.js";

const sucessResponseData = ({
  res,
  data = null,
  message = "",
  statusCode = HttpStatus.OK,
}) => {
  res.status(statusCode).json({
    sucess: true,
    ...(data && { data }),
    ...(message && { message }),
  });
};

export default sucessResponseData;
