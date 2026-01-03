export const uploadReport = async (req, res) => {
  res.json({
    fileUrl: req.file.location
  });
};
