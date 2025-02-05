export const generateAvatarUrl = (name: string): string => {
    // Encode the name to handle special characters
    const encodedName = encodeURIComponent(name);
    
    // Generate a random background color
    const colors = ['1abc9c', '2ecc71', '3498db', '9b59b6', '34495e', '16a085', '27ae60', '2980b9', '8e44ad', '2c3e50'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Return avatar URL with consistent styling
    return `https://ui-avatars.com/api/?name=${encodedName}&background=${randomColor}&color=fff&size=128&bold=true`;
  };
  
  export const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };