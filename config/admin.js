module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7aac79fd4db45be83b7bdf4b50f06a84'),
  },
});
