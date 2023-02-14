import React from 'react';
import {
  MdFormatBold,
  MdFormatItalic,
  MdStrikethroughS,
  MdFormatUnderlined,
  MdFormatQuote,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdTextFields,
  MdTitle,
  MdCropDin,
  MdOutlineGpsFixed,
  MdOutlineBorderHorizontal,
  MdOutlineCancel,
  MdLightbulb,
} from 'react-icons/md';

const iconList = {
  bold: <MdFormatBold size={20} />,
  italic: <MdFormatItalic size={20} />,
  strikethrough: <MdStrikethroughS size={20} />,
  underline: <MdFormatUnderlined size={20} />,

  blockquote: <MdFormatQuote size={20} />,
  alignLeft: <MdFormatAlignLeft size={20} />,
  alignCenter: <MdFormatAlignCenter size={20} />,
  alignRight: <MdFormatAlignRight size={20} />,
  textField: <MdTitle size={20} />,
  longTextField: <MdTextFields size={20} />,
  blank: <MdCropDin size={20} />,
  dargTarget: <MdOutlineGpsFixed size={20} />,
  longDargTarget: <MdOutlineBorderHorizontal size={22} />,
  closeTest: <MdOutlineCancel size={20} />,
  lightBulb: <MdLightbulb size={20} />,

};

const Icon = (props:any) => {
  const { icon } = props;
  // @ts-ignore
  return iconList[icon];
};

export default Icon;
