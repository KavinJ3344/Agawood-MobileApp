import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function Button({ 
  title, 
  onPress, 
  className = '', 
  loading = false,
  disabled = false 
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`bg-blue-600 py-4 rounded-xl items-center justify-center ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white text-lg font-semibold">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
