const ProfileService = require("../service/profile.service");
class ProfileController {
  async getProfile(req, res, next) {
    try {
      const profile = await ProfileService.getProfile(req.params.id);
      if (!profile) {
        return res.status(404).send({ message: "Profile not found" });
      }
      return res.send(profile);
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
  async updateProfile(req, res, next) {
    try {
      const result = await ProfileService.updateProfile(
        req.params.id,
        req.user.userId
      );
      if (result == 404) {
        return res.status(404).json({ message: "Profile not found" });
      } else if (result == 403) {
        return res.status(403).json({ message: "Unauthorized" });
      }
      return res.send({ message: "Profile updated successfully" });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
  async deleteProfile(req, res, next) {
    try {
      const result = await ProfileService.deleteProfile(
        req.params.id,
        req.user.userId
      );
      if (result == 404) {
        return res.status(404).json({ message: "Profile not found" });
      } else if (result == 403) {
        return res.status(403).json({ message: "Unauthorized" });
      }
      res.send({ message: "Profile deleted successfully" });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}
module.exports = new ProfileController();
