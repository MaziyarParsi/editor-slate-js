/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';
import { useSlate } from 'slate-react';
import {
  toggleBlock,
  toggleMark,
  isMarkActive,
  addMarkData,
  isBlockActive,
  activeMark,
} from 'utils/SlateUtilityFunctions';
import useFormat from 'hooks/useFormat';
import { v4 as uuidv4 } from 'uuid';
import OperatorButton from './Elements/OperatorButton';
import Icon from './Elements/Icon';
import defaultToolbarGroups from './toolbarGroup';
import ColorPicker from './Elements/ColorPicker';

const Toolbar = () => {
  const editor = useSlate();
  const isTable = useFormat(editor, 'table');
  const [toolbarGroups, setToolbarGroups] = useState(defaultToolbarGroups);

  useEffect(() => {
    // Filter out the groups which are not allowed to be inserted when a table is in focus.
    let filteredGroups = [...defaultToolbarGroups];
    if (isTable) {
      filteredGroups = toolbarGroups.map((grp) => grp.filter(
        (element) => !['codeToText'].includes(element.type),
      ));
      filteredGroups = filteredGroups.filter((elem) => elem.length);
    }
    setToolbarGroups(filteredGroups);
  }, [isTable]);

  const BlockButton = ({ format }: any) => (
    <OperatorButton
      active={isBlockActive(editor, format)}
      format={format}
      onMouseDown={(e: any) => {
        e.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Icon icon={format} />
    </OperatorButton>
  );
  const MarkButton = ({ format }: any) => (
    <OperatorButton
      active={isMarkActive(editor, format)}
      format={format}
      onMouseDown={(e: any) => {
        e.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon icon={format} />
    </OperatorButton>
  );
  const changeMarkData = (event: any, format: any) => {
    event.preventDefault();
    const { value } = event.target;
    addMarkData(editor, { format, value });
  };
  const Dropdown = ({ format, options }: any) => (
    <div className="flex items-center">
      <small className="px-1">size</small>
      <select
        value={activeMark(editor, format)}
        onChange={(e) => { changeMarkData(e, format); }}
        className="dark:bg-stone-700 bg-stone-200 px-2 py-1  rounded-md"
      >
        {options.map((item: any) => (
          <option key={item.text} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex items-center px-2">
      {toolbarGroups.map((group) => (
        <span key={uuidv4()} className="toolbar-grp flex py-2">
          {group.map((element) => {
            switch (element.type) {
              case 'block':
                return <BlockButton key={element.id} {...element} />;
              case 'mark':
                return <MarkButton key={element.id} {...element} />;
              case 'dropdown':
                return <Dropdown key={element.id} {...element} />;
              case 'color-picker':
                return (
                  <ColorPicker
                    key={element.id}
                    activeMark={activeMark}
                    format={element.format}
                    editor={editor}
                  />
                );
              default:
                return null;
            }
          })}
        </span>
      ))}
    </div>
  );
};

export default Toolbar;
