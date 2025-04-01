import React from 'react';

// Cargar todos los íconos SVG como componentes React
const iconModules = import.meta.glob('../assets/icons/*.svg?react', { eager: true });

// Crear mapa dinámico de íconos
const icons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {};

for (const path in iconModules) {
  debugger;
  const name = path.split('/').pop()?.replace('.svg?react', '') || '';
  icons[name] = iconModules[path] as React.FC<React.SVGProps<SVGSVGElement>>;
}

interface SvgIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: keyof typeof icons;
}

const SvgIcon: React.FC<SvgIconProps> = ({ name, ...props }) => {
  debugger;
  const Icon = icons[name];
  console.log(`Icon "${name}"`)
  if (!Icon) {
    console.warn(`Icon "${name}" not found in /assets/icons/`);
    return null;
  }
  return <Icon {...props} />;
};

export default SvgIcon;