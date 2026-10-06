const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || 'Permintaan gagal diproses.');
  }

  return payload;
}

export function getDestinations() {
  return request('/destinations');
}

export function getPackages() {
  return request('/packages');
}

export function getTestimonials() {
  return request('/testimonials');
}

export function sendContactMessage(formData) {
  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}
