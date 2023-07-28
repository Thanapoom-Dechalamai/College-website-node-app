require('dotenv').config();
const ftp = require('ftp');

const methods = {
    upLoadImage(filePath, data)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                const ftpConfig = {
                    host: process.env.DB_HOST,
                    port: process.env.DB_PORT,
                    user: process.env.FTP_USER,
                    password: process.env.FTP_PASSWORD,
                };

                // Create a new FTP client
                const client = new ftp();

                // Connect to the FTP server
                client.connect(ftpConfig);

                // Upload the file
                client.on('ready', () =>
                {
                    client.put(data, filePath, (err) =>
                    {
                        if (err)
                        {
                            console.error('Error uploading file:', err);
                            resolve({ error: 'Error uploading file to FTP server' });
                        } else
                        {
                            // Close the FTP connection after the upload
                            client.end();
                            console.log('File uploaded successfully');
                            resolve({ message: 'File uploaded successfully' });
                        }

                    });
                });

                client.on('error', (err) =>
                {
                    console.error('FTP connection error:', err);
                    reject({ error: 'FTP connection error' });
                });

            } catch (error)
            {
                reject(error);
            }
        });
    }
};

module.exports = { ...methods };