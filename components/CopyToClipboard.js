import { useRef, useState } from 'react';

export default function CopyToClipboard({ itemToCopy }) {
	const [copySuccess, setCopySuccess] = useState('');
	const textAreaRef = useRef(null);

	const copy = () => {
		navigator.clipboard.writeText(itemToCopy);
		setCopySuccess('Copied!');
	};
	return (
		<div>
			<img
				onClick={copy}
				src='/copy_clipboard.svg'
				width='25'
				height='25'
				alt='copy icon'
			/>
			{copySuccess}
		</div>
	);
}
