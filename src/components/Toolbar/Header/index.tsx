import { useContext } from 'react';
import { EditorCtx } from '../editorCtx';

const Header = (props: { name: 'h1' | 'h2' | 'h3' | 'h4' }) => {
  const { name } = props;
  const { insertText } = useContext(EditorCtx);

  const headerMap = {
    h1: (
      <svg className="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8203">
        <path
          d="M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m512 544h-112V240a48 48 0 0 0-48-48h-48a48 48 0 0 0-42.88 26.52l-48 96A48 48 0 0 0 864 384h48v352h-112a32 32 0 0 0-32 32v32a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z"
          p-id="8204"
        ></path>
      </svg>
    ),
    h2: (
      <svg className="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8337">
        <path
          d="M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m488.28 544.26H821.64c17.04-120.7 292-158.56 292-358.62C1113.6 268.34 1030 192 910.1 192a229.42 229.42 0 0 0-195.84 110.1 23.62 23.62 0 0 0 7.16 31.9L764 362.46a23.78 23.78 0 0 0 32.54-6c26-36.46 63.16-62.7 107.44-62.7 59.14 0 98.86 36.16 98.86 90 0 134-298.9 168-298.9 390.98a274.28 274.28 0 0 0 2.78 36.84 24.36 24.36 0 0 0 23.6 20.42h366A23.7 23.7 0 0 0 1120 808.36V760a23.7 23.7 0 0 0-23.72-23.74z"
          p-id="8338"
        ></path>
      </svg>
    ),
    h3: (
      <svg className="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8471">
        <path
          d="M960.14 439.56l150.78-171.76a23.64 23.64 0 0 0 5.86-15.52v-36.64A23.78 23.78 0 0 0 1092.88 192H759.74a23.76 23.76 0 0 0-23.88 23.64V264a23.76 23.76 0 0 0 23.88 23.66s204.88-0.22 212-0.5c-5.54 5.76-148.24 171.16-148.24 171.16a23.34 23.34 0 0 0-3.72 24.76l13.42 30.6a25.88 25.88 0 0 0 21.86 14.32h34.16c97.22 0 131.7 54.46 131.7 101.12 0 57.14-49.16 100.26-114.34 100.26-48 0-93.76-20.92-130.58-53.78a24 24 0 0 0-35.52 3.62l-32 44a23.46 23.46 0 0 0 2.8 30.82c49.2 46.68 121.24 78 198.76 78 128.4 0 219.72-92.44 219.72-206.34 0.02-102.2-73.46-168.34-169.62-186.14zM608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z"
          p-id="8472"
        ></path>
      </svg>
    ),
    h4: (
      <svg className="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8605">
        <path
          d="M608 192h-197.88A26.12 26.12 0 0 0 384 218.12v43.76A26.12 26.12 0 0 0 410.12 288H464v176H176v-176h53.88A26.12 26.12 0 0 0 256 261.88V224a32 32 0 0 0-32-32H32a32 32 0 0 0-32 32v37.88A26.12 26.12 0 0 0 26.12 288H80v448H26.12A26.12 26.12 0 0 0 0 762.12V800a32 32 0 0 0 32 32h197.88A26.12 26.12 0 0 0 256 805.88v-43.76A26.12 26.12 0 0 0 229.88 736H176v-176h288v176h-53.88A26.12 26.12 0 0 0 384 762.12V800a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-37.88A26.12 26.12 0 0 0 613.88 736H560V288h53.88A26.12 26.12 0 0 0 640 261.88V224a32 32 0 0 0-32-32z m512 272h-32V224a32 32 0 0 0-32-32h-32a32 32 0 0 0-32 32v240h-192V224a32 32 0 0 0-32-32h-32a32 32 0 0 0-32 32v272a64 64 0 0 0 64 64h224v240a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32V560h32a32 32 0 0 0 32-32v-32a32 32 0 0 0-32-32z"
          p-id="8606"
        ></path>
      </svg>
    ),
  };

  const handleClick = () => {
    insertText(`${'#'.repeat(Number(name.slice(1)))} `, false, true);
  };

  return (
    <div className="icon-wrapper" onClick={handleClick}>
      {headerMap[name]}
    </div>
  );
};

export default Header;
