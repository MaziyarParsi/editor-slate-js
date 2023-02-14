/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useRef, useState } from 'react';
import { MdFormatColorText, MdFormatColorFill } from 'react-icons/md';
import { Editor, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { addMarkData, activeMark } from 'utils/SlateUtilityFunctions';
import { colorsList } from 'mock/data';
import usePopup from 'hooks/usePopup';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .color-options {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    align-items: center;
    gap: 5px;
  }
  .clicked {
    border: 1px solid lightgray;
    border-bottom: none;
  }
  .option,
  .hexPreview {
    width: 16px;
    height: 16px;
    background-color: #000000;
    :hover {
      cursor: pointer;
    }
  }
  .color-picker form {
    display: flex;
    align-items: center;
    column-gap: 5px;
    width: 100%;
  }
  .color-picker input {
    width: 65%;
    height: 1.3em;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding-left: 5px;
  }
  .color-picker button {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .color-picker input:focus {
    outline: none;
  }
`;

const logo = {
  color: <MdFormatColorText size={20} />,
  bgColor: <MdFormatColorFill size={20} />,
};
const ColorPicker = ({ format, editor }: any) => {
  const [selection, setSelection] = useState();
  // const [hexValue, setHexValue] = useState('');
  // const [validHex, setValidHex] = useState<any>();
  const colorPickerRef = useRef(null);
  const [showOptions, setShowOptions] = usePopup(colorPickerRef);

  // const isValideHexSix = /^#[0-9A-Za-z]{6}/;
  // const isValideHexThree = /^#[0-9A-Za-z]{3}/;

  const changeColor = (e: any) => {
    const clickedColor = e.target.getAttribute('data-value');
    selection && Transforms.select(editor, selection);
    selection && ReactEditor.focus(editor);

    addMarkData(editor, { format, value: clickedColor });
    // @ts-ignore
    setShowOptions(false);
  };
  const toggleOption = () => {
    setSelection(editor.selection);
    selection && ReactEditor.focus(editor);
    // @ts-ignore
    setShowOptions((prev: any) => !prev);
  };
  const handleReset = () => {
    Editor.removeMark(editor, format);
    // @ts-ignore
    setShowOptions(false);
  };
  return (
    <StyledDiv>
      <div className="color-picker flex relative mx-2 " ref={colorPickerRef}>
        {/* @ts-ignore */}
        <button
          type="button"
          style={{
            borderBottom: `4px solid ${activeMark(editor, format)}`,
            color: showOptions ? 'darkblack' : '',
            paddingBottom: 2,
            opacity: '1',
          }}
          className={
            showOptions
              ? 'clicked dark:bg-stone-600 bg-stone-900'
              : `${activeMark(editor, format)}`
          }
          onClick={toggleOption}
        >
          {/* @ts-ignore */}
          {logo[format]}
        </button>
        {showOptions && (
          <div className="absolute left-0 dark:bg-stone-600 bg-stone-300 py-1 px-2 h-fit z-20">
            <div className="color-options">
              {colorsList.map((color, index) => (
                <div
                  key={index}
                  data-value={color}
                  onClick={changeColor}
                  className="option"
                  style={{ background: color }}
                />
              ))}
            </div>
            <div className="flex justify-center mt-2 border-t border-solid border-stone-300">
              <button
                type="button"
                onClick={handleReset}
              >
                reset
              </button>
            </div>
          </div>
        )}
      </div>
    </StyledDiv>
  );
};

export default ColorPicker;
