const Profile = require("../models/profile.model");
class ProfileService {
  async getProfile(id) {
    const profile = await Profile.findById(id);
    if (!profile) {
      return null;
    }
    return profile;
  }
  async updateProfile(id, userId) {
    const profile = await Profile.findById(id);
    if (!profile) {
      return 404;
    }
    if (profile.userId.toString() !== userId) {
      return 403;
    }
    await profile.save();
  }
  async deleteProfile(id, userId) {
    const profile = await Profile.findById(id);
    if (!profile) {
      return 404;
    }
    if (profile.userId.toString() !== userId) {
      return 403;
    }
    await profile.remove();
  }
}
module.exports = new ProfileService();
