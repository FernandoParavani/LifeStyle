import React from "react";
import { Input } from "native-base";

interface EntradaTextoProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  editable?: boolean; // Adiciona suporte para campos não editáveis
  style?: object; // Permite estilos personalizados
}

export const EntradaTexto: React.FC<EntradaTextoProps> = ({
  placeholder,
  value,
  onChangeText,
  editable = true, // Valor padrão como editável
  style,
  ...props
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      isReadOnly={!editable} // NativeBase usa `isReadOnly` para campos não editáveis
      style={style}
      {...props} // Passa propriedades adicionais para o componente Input
    />
  );
};
