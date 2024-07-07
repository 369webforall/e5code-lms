# e5code online coaching center


callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },