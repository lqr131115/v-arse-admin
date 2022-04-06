export enum FileTypeEnum {
  EXCEL = ".xls,.xlsx",
  WORD = ".doc,.docx",
  PDF = ".pdf",
  PPT = ".ppt,.pptx",
  TEXT = ".txt",
  IMAGE = ".png,.jpg,.jpeg,.gif",
}

export const fileType = {
  Excel: FileTypeEnum.EXCEL,
  Word: FileTypeEnum.WORD,
  PDF: FileTypeEnum.PDF,
  PPT: FileTypeEnum.PPT,
  Text: FileTypeEnum.TEXT,
  Image: FileTypeEnum.IMAGE,
};

export const fileTypeCheckbox = Object.keys(fileType).map((key) => ({
  name: key,
  label: fileType[key],
}));
