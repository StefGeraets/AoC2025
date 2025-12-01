import * as fs from "node:fs";

export default (inputFilePath: string) => {
	return new Promise<string>((resolve, reject) => {
		fs.readFile(inputFilePath, "utf-8", (err, data) => {
			if (err) {
				reject(err);
			}
			resolve(data);
		});
	});
};
