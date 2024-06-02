import data from './data/eve.json';

export const loadData = () => {
  return data.map(event => ({
    timestamp: new Date(event.timestamp),
    src_ip: event.src_ip || 'Unknown',
    dest_ip: event.dest_ip || 'Unknown',
    category: event.alert?.category || 'Unknown',
    severity: event.alert?.severity || 'Unknown',
  }));
};
