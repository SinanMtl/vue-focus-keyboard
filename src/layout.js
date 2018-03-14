module.exports = {
	default: 'us_international',
	_metaKeys: {
		backspace: { width: 110 },
		tab: { width: 80 },
		enter: { width: 80 },
		caps: { width: 110 },
		shiftl: { width: 80 },
		shiftr: { width: 135 },
		ctrll: { width: 105 },
		ctrlr: { width: 105 },
		alt: { width: 80 },
		altgr: { width: 80 },
		space: { width: 435 }
	},
	us_international: {
		default: [
			'§ 1 2 3 4 5 6 7 8 9 0 - = {backspace}',
			'{tab} q w e r t y u i o p [ ] {enter}',
			`{capslock} a s d f g h j k l ; ' \\`,
			'{shiftl} ` z x c v b n m , . / {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		shifted: [
			'± ! @ # $ % ˆ & * ( ) _ + {backspace}',
			'{tab} Q W E R T Y U I O P { } {enter}',
			'{capslock} A S D F G H J K L : " |',
			'{shiftl} ˜ Z X C V B N M < > ? {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		capsed: [
			'§ 1 2 3 4 5 6 7 8 9 0 - = {backspace}',
			'{tab} Q W E R T Y U I O P [ ] {enter}',
			`{capslock} A S D F G H J K L ; ' \\`,
			'{shiftl} ` Z X C V B N M , . / {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		alted: [
			'§ ¡ ™ £ ¢ ∞ § ¶ • ª º – ≠ {backspace}',
			'{tab} œ ∑ ´ ® † ¥ ¨ ˆ ø π “ ‘ {enter}',
			`{capslock} å ß ∂ ƒ © ˙ ∆ ˚ ¬ … æ «`,
			'{shiftl} ` Ω ≈ ç √ ∫ ˜ µ ≤ ≥ ÷ {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		shifted_capsed: [
			'± ! @ # $ % ˆ & * ( ) _ + {backspace}',
			'{tab} q w e r t y u i o p { } {enter}',
			'{capslock} a s d f g h j k l : " |',
			'{shiftl} ˜ z x c v b n m < > ? {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		shifted_alted: [
			'± ⁄ € ‹ › ﬁ ﬂ ‡ ° · ‚ — ± {backspace}',
			'{tab} Œ „ ´ ‰ ˇ Á ¨ i Ø ∏ ” ’ {enter}',
			`{capslock} Å Í Î Ï ˝ Ó Ô  Ò Ú Æ »`,
			'{shiftl} ` ¸ ˛ Ç ◊ ı ˜ Â ¯ ˘ ¿ {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		]
	},
	turkish_qwerty_pc: {
		_metaKeys: {
			backspace: { width: 110 },
			tab: { width: 80 },
			enter: { width: 80 },
			caps: { width: 110 },
			shiftl: { width: 80 },
			shiftr: { width: 135 },
			ctrll: { width: 105 },
			ctrlr: { width: 105 },
			alt: { width: 80 },
			altgr: { width: 80 },
			space: { width: 435 }
		},
		default: [
			'" 1 2 3 4 5 6 7 8 9 0 * - {backspace}',
			'{tab} q w e r t y u ı o p ğ ü {enter}',
			'{capslock} a s d f g h j k l ş i ,',
			'{shiftl} < z x c v b n m ö ç . {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		shifted: [
			"é ! ' ^ + % & / ( ) = ? _ {backspace}",
			'{tab} Q W E R T Y U I O P Ğ Ü {enter}',
			'{capslock} A S D F G H J K L Ş İ ;',
			'{shiftl} > Z X C V B N M Ö Ç : {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		capsed: [
			'" 1 2 3 4 5 6 7 8 9 0 * - {backspace}',
			'{tab} Q W E R T Y U I O P Ğ Ü {enter}',
			'{capslock} A S D F G H J K L Ş İ ,',
			'{shiftl} < Z X C V B N M Ö Ç . {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		alted: [
			`< > £ # $ ½ § { [ ] } \\ | {backspace}`,
			'{tab} @ ∑ € ® ₺ ¥ ü i ö π ¨ ~ {enter}',
			'{capslock} æ ß ∂ ƒ ğ ^ ∆ ¨ ¬ ´ æ `',
			'{shiftl} |  ≈ ç √ ∫ ~ µ ≤ ≥ . {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		shifted_capsed: [
			"é ! ' ^ + % & / ( ) = ? _ {backspace}",
			'{tab} q w e r t y u ı o p ğ ü {enter}',
			'{capslock} a s d f g h j k l ş i ;',
			'{shiftl} > z x c v b n m ö ç : {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		],
		shifted_alted: [
			'" · € © ‚ ˚ ˙ ‡ ° Ø ø — ± {backspace}',
			'{tab} Œ „ ‰ Â Ê Á Ü ı Ö ∏ ” ’ {enter}',
			'{capslock} Æ Ş Î Ï Ğ Ó Ô  Ò Ú Æ »',
			'{shiftl} Ÿ Û Ù Ç ◊ ß ˆ ˜ ¯ ˘ ¿ {shiftr}',
			'{ctrll} {alt} {space} {altgr} {ctrlr}'
		]
	},
	numeric: {
		_metaKeys: {
			enter: { width: 50 }
		},
		default: [
      '{backspace}',
      '7 8 9',
      '6 5 4',
      '3 2 1',
      '0 . {enter}'
    ]
	}
}
