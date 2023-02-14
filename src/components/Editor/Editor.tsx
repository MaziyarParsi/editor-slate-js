import { useCallback, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, Editable, withReact } from 'slate-react';
import { getMarked, getBlock } from 'utils/SlateUtilityFunctions';
import Toolbar from './Toolbar';

const Element = (props:any) => getBlock(props);
const Leaf = ({ attributes, children, leaf }:any) => {
  const finalChildren = getMarked(leaf, children);
  return <span {...attributes}>{finalChildren}</span>;
};
const SlateEditor = () => {
  const editor = useMemo(() => withHistory((withReact(createEditor()))), []);
  const [value, setValue] = useState([
    {
      type: 'paragaph',
      children: [{ text: '' }],
    },
  ]);

  const handleEditorChange = (newValue:any) => {
    setValue(newValue);
  };

  const renderElement = useCallback((props:any) => <Element {...props} />, []);

  const renderLeaf = useCallback((props:any) => <Leaf {...props} />, []);

  return (
    <div
      dir="ltr"
      className="flex flex-col rounded-md  pb-4 border border-solid  w-full"
    >
      <Slate editor={editor} value={value} onChange={handleEditorChange}>
        <Toolbar />
        <div className="editor-wrapper border-t border-solid border-stone-600 dark:border-stone-200 px-2">
          <Editable
            placeholder="Write something"
            className="mt-2 pb-4"
            renderElement={renderElement}
            renderLeaf={renderLeaf}
          />
        </div>

      </Slate>
    </div>
  );
};

export default SlateEditor;
