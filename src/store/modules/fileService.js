import httpClient from '@/httpClient'

export default {
    actions: {
        async uploadFile(_, file) {
            try {
                const fileName = file.name;
                const chunkSize = 1024 * 1024; // 1MB
                const totalSize = file.size;
                const chunks = Math.ceil(totalSize / chunkSize);
                let currentChunk = 0;
                let fileId = null;
                while (currentChunk < chunks) {
                    const chunkStart = currentChunk * chunkSize;
                    let chunkEnd = (currentChunk + 1) * chunkSize - 1;
                    if (chunkEnd > totalSize - 1) {
                        chunkEnd = totalSize - 1;
                    }

                    const chunk = file.slice(chunkStart, chunkEnd + 1);
                    const formData = new FormData();
                    formData.append('file', chunk, fileName);
                    formData.append('chunkIndex', currentChunk);
                    formData.append('chunksCount', chunks);
                    if (fileId) {
                        formData.append('fileId', fileId);
                    }

                    const response = await httpClient.post('/api/files/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    console.log(response.data);
                    fileId = response.data.result.fileId;
                    currentChunk++;
                }
                return fileId;
            } catch (error) {
                // Handle error
                console.error(error);
            }
        },
        async downloadFile(/* eslint-disable-next-line no-unused-vars */ _, fileId) {
            try {
                const response = await httpClient.get(`/api/files/DownloadFile/${fileId}`, {
                    responseType: 'blob',
                });
                return response
            } catch (error) {
                // Handle error
                console.error(error);
            }
        },
        async downloadProtocolFile(/* eslint-disable-next-line no-unused-vars */_, examGroupId) {
            try {
                const response = await httpClient.get(`/api/admin/branchExams/GetProtocolFile/${examGroupId}`, {
                    responseType: 'blob',
                });
                return response
            } catch (error) {
                // Handle error
                console.error(error);
            }

        },
        async downloadListFile(/* eslint-disable-next-line no-unused-vars */_, examGroupId) {
            try {
                const response = await httpClient.get(`/api/admin/branchExams/GetListFile/${examGroupId}`, {
                    responseType: 'blob',
                });
                return response
            } catch (error) {
                // Handle error
                console.error(error);
            }
        },
        async downloadStudentListFile(/* eslint-disable-next-line no-unused-vars */_, examGroupId) {
            try {
                const response = await httpClient.get(`/api/admin/branchExams/GetStudentListFile/${examGroupId}`, {
                    responseType: 'blob',
                });
                return response
            } catch (error) {
                // Handle error
                console.error(error);
            }
        },
    },
};