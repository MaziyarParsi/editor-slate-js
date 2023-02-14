const toolbarGroups = [
  [
    {
      id: 1,
      format: 'fontSize',
      type: 'dropdown',
      options: [{ text: 'Small', value: 'small' }, { text: 'Normal', value: 'normal' }, { text: 'Medium', value: 'medium' }, { text: 'Huge', value: 'huge' }],
    },
  ],
  [
    {
      id: 2,
      format: 'bold',
      type: 'mark',
    },
    {
      id: 3,
      format: 'italic',
      type: 'mark',
    },
    {
      id: 4,
      format: 'underline',
      type: 'mark',
    },
    {
      id: 5,
      format: 'strikethrough',
      type: 'mark',
    },
  ],
  [
    {
      id: 6,
      format: 'color',
      type: 'color-picker',
    },
    {
      id: 7,
      format: 'bgColor',
      type: 'color-picker',
    },
  ],
  [
    {
      id: 8,
      format: 'alignLeft',
      type: 'block',
    },
    {
      id: 9,
      format: 'alignCenter',
      type: 'block',
    },
    {
      id: 10,
      format: 'alignRight',
      type: 'block',
    },
  ],

];

export default toolbarGroups;
