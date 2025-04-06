import React from 'react';
import './CombatLog.css';

const CombatLog = ({ log }) => {
  if (!log || log.length === 0) {
    return <div className="empty-log">戰鬥尚未開始</div>;
  }

  return (
    <div className="combat-log">
      {log.map((entry, index) => (
        <div key={`log-${entry.timestamp}-${index}`} className="log-entry">
          <div className="log-message">{entry.message}</div>
          <div className="log-time">
            {new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CombatLog;
