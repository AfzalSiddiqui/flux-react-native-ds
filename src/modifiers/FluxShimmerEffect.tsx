import React, { useEffect, useRef, ReactNode } from 'react';
import { Animated, View, StyleSheet, ViewStyle } from 'react-native';
import { FluxRadius } from '../tokens/FluxRadius';
import { useFluxColors } from '../theme/FluxThemeManager';
import { hexToRgba } from '../utils/hexToRgba';

interface FluxShimmerEffectProps {
  active?: boolean;
  cornerRadius?: number;
  children: ReactNode;
  style?: ViewStyle;
}

/**
 * Wrapper component that overlays a shimmer/skeleton animation.
 * When active, content is hidden (frame preserved) and replaced
 * by an animated gradient sweep — 1.5s linear loop.
 */
export function FluxShimmerEffect({
  active = true,
  cornerRadius = FluxRadius.sm,
  children,
  style,
}: FluxShimmerEffectProps) {
  const colors = useFluxColors();
  const phase = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    if (active) {
      phase.setValue(-1);
      const animation = Animated.loop(
        Animated.timing(phase, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      );
      animation.start();
      return () => animation.stop();
    }
  }, [active, phase]);

  if (!active) {
    return <>{children}</>;
  }

  const translateX = phase.interpolate({
    inputRange: [-1, 1],
    outputRange: [-200, 200],
  });

  const borderColor = typeof colors.border === 'string' && colors.border.startsWith('#')
    ? hexToRgba(colors.border, 0.3)
    : colors.border;

  const surfaceColor = typeof colors.surface === 'string' && colors.surface.startsWith('#')
    ? hexToRgba(colors.surface, 0.6)
    : colors.surface;

  return (
    <View style={style} pointerEvents="none" accessible accessibilityLabel="Loading">
      <View style={{ opacity: 0 }}>{children}</View>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: borderColor,
            borderRadius: cornerRadius,
            overflow: 'hidden',
          },
        ]}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: surfaceColor,
            transform: [{ translateX }],
            width: 200,
            alignSelf: 'center',
          }}
        />
      </View>
    </View>
  );
}
