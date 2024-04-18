export const mapToDTO = (dtoClass) => {
  return (req, _, next) => {
    req.dto = dtoClass.toDTO(req.body);
    next();
  };
};
