export default function getAttributeValueString(value: string) {
	return (value.length)
		? `="${value}"`
		: ''
}
