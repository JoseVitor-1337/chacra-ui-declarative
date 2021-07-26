import { FC, memo } from "react"
import { IconType } from "react-icons"
import { IconButton } from "@chakra-ui/react"

interface Props {
	Icon: IconType
	onClick?: () => void
}

const ButtonIcon: FC<Props> = ({ Icon, onClick }: Props) => {
	return (
		<IconButton
			aria-label=""
			icon={<Icon />}
			onClick={onClick}
			isRound
			size="lg"
			alignSelf="flex-end"
		/>
	)
}

export default memo(ButtonIcon)
