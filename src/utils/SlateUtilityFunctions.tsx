/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-param-reassign */
import { Editor, Transforms, Element as SlateElement } from 'slate';

const alignment = ['alignLeft', 'alignRight', 'alignCenter'];
const list_types = ['orderedList', 'unorderedList'];

export const sizeMap = {
  small: '0.75em',
  normal: '1em',
  medium: '1.75em',
  huge: '2.5em',
};

export const isBlockActive = (editor: any, format: any) => {
  // @ts-ignore
  const [match] = Editor.nodes(editor, {
    // @ts-ignore
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });

  return !!match;
};

export const toggleBlock = (editor: any, format: any) => {
  const isActive = isBlockActive(editor, format);
  const isList = list_types.includes(format);
  const isIndent = alignment.includes(format);
  const isAligned = alignment.some((alignmentType) => isBlockActive(editor, alignmentType));

  /* If the node is already aligned and change in indent
  is called we should unwrap it first and split the node to prevent
    messy, nested DOM structure and bugs due to that. */
  if (isAligned && isIndent) {
    Transforms.unwrapNodes(editor, {
      match: (n) => alignment.includes(
        // @ts-ignore
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type,
      ),
      split: true,
    });
  }

  /* Wraping the nodes for alignment, to allow it to co-exist with other block level operations */
  if (isIndent) {
    Transforms.wrapNodes(editor, {
      // @ts-ignore

      type: format,
      children: [],
    });
    return;
  }
  Transforms.unwrapNodes(editor, {
    match: (n) => list_types.includes(
      // @ts-ignore
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type,
    ),
    split: true,
  });

  Transforms.setNodes(editor, {
    // @ts-ignore
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  });

  if (isList && !isActive) {
    Transforms.wrapNodes(editor, {
      // @ts-ignore
      type: format,
      children: [],
    });
  }
};
export const addMarkData = (editor: any, data: any) => {
  Editor.addMark(editor, data.format, data.value);
};
export const isMarkActive = (editor: any, format: any) => {
  const marks = Editor.marks(editor);
  // @ts-ignore
  return marks ? marks[format] === true : false;
};
export const toggleMark = (editor: any, format: any) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const activeMark = (editor: any, format: any) => {
  const defaultMarkData = {
    color: 'black',
    bgColor: 'black',
    fontSize: 'normal',
    fontFamily: 'sans',
  };
  const marks = Editor.marks(editor);
  // @ts-ignore
  const defaultValue = defaultMarkData[format];
  // @ts-ignore
  return marks?.[format] ?? defaultValue;
};
// @ts-ignore
export const getMarked = (leaf: any, children: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.strikethrough) {
    children = (
      <span style={{ textDecoration: 'line-through' }}>{children}</span>
    );
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.color) {
    children = <span style={{ color: leaf.color }}>{children}</span>;
  }
  if (leaf.bgColor) {
    children = (
      <span style={{ backgroundColor: leaf.bgColor }}>{children}</span>
    );
  }
  if (leaf.fontSize) {
    // @ts-ignore
    const size = sizeMap[leaf.fontSize];
    children = <span style={{ fontSize: size }}>{children}</span>;
  }
  return children;
};

export const getBlock = (props: any) => {
  const { element, children } = props;
  const attributes = props.attributes ?? {};

  switch (element.type) {
    case 'alignLeft':
      return (
        <div
          style={{ listStylePosition: 'inside' }}
          {...attributes}
          {...element.attr}
        >
          {children}
        </div>
      );
    case 'alignCenter':
      return (
        <div
          style={{
            textAlign: 'center',
          }}
          {...attributes}
          {...element.attr}
        >
          {children}
        </div>
      );
    case 'alignRight':
      return (
        <div
          dir="rtl"
          {...attributes}
          {...element.attr}
        >
          {children}
        </div>
      );
    default:
      return (
        <div {...element.attr} {...attributes}>
          {children}
        </div>
      );
  }
};
