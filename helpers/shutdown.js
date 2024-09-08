const appShutdown = (server, exitCode=1) => {
  server.close(() => {
    console.log("Server closed");

    // Close DB connection if necessary
    db.close(() => {
      console.log("MongoDB connection closed");
      process.exit(exitCode); // Exit process after shutdown
    });
  });
};

export default appShutdown;
