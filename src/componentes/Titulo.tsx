import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TituloProps extends ITextProps {
  children: ReactNode;
}

export function Titulo({ children, ...rest }: TituloProps) {
  return (
    <Text
      fontSize="20px" // Corrigido: fontSize agora é válido
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      mt={5}
      {...rest}
    >
      {children}
    </Text>
  );
}
