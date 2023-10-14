import * as fs from 'fs';
import * as path from 'path';

import { Injectable, InternalServerErrorException } from '@nestjs/common';

import { nanoid } from 'nanoid';

@Injectable()
export class FilesService {
  async createFile(file: Express.Multer.File): Promise<string> {
    try {
      const id = nanoid();
      const extName = path.extname(file.originalname);
      const fileName = `${id}${extName}`;
      const filePath = path.resolve(__dirname, '..', 'static');

      if (!fs.existsSync(filePath)) {
        fs.mkdir(filePath, { recursive: true }, (err) => {
          throw new InternalServerErrorException('Такого пути нет');
        });
      }
      fs.writeFile(path.join(filePath, fileName), file.buffer, (err) => {
        throw new InternalServerErrorException('Не удалось записать в файл');
      });

      return fileName;
    } catch (e) {
      throw new InternalServerErrorException(
        'Произошла ошибка при записе файла',
      );
    }
  }
}
