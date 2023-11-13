const ftp = require("ftp");
const ftpConfig = require("../configs/db.config").ftpConfig;

const methods = {
    uploadFile(filePath, data) {
        return new Promise(async (resolve, reject) => {
            try {
                // Create a new FTP client //
                const client = new ftp();

                // Connect to the FTP server //
                client.connect(ftpConfig);

                // Upload the file //
                client.on("ready", () => {
                    client.put(data, filePath, (err) => {
                        if (err) {
                            console.error("Error uploading file:", err);
                            resolve({ error: "Error uploading file to FTP server" });
                        } else {
                            // Close the FTP connection after the upload //
                            client.end();
                            resolve({ message: "File uploaded successfully" });
                        }

                    });
                });

                client.on("error", (err) => {
                    console.error("FTP connection error:", err);
                    reject({ error: "FTP connection error" });
                });
            } catch (error) {
                reject(error);
            }
        });
    }
};

module.exports = { ...methods };