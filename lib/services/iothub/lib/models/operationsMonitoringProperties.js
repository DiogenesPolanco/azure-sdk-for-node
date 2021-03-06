/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the OperationsMonitoringProperties class.
 * @constructor
 * The Operation Monitoring properties.
 *
 * @member {object} [events]
 * 
 */
function OperationsMonitoringProperties() {
}

/**
 * Defines the metadata of OperationsMonitoringProperties
 *
 * @returns {object} metadata of OperationsMonitoringProperties
 *
 */
OperationsMonitoringProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'OperationsMonitoringProperties',
    type: {
      name: 'Composite',
      className: 'OperationsMonitoringProperties',
      modelProperties: {
        events: {
          required: false,
          serializedName: 'events',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = OperationsMonitoringProperties;
