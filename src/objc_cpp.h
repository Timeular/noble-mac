#pragma once

#include <string>
#include <vector>
#import <Foundation/Foundation.h>
#import <CoreBluetooth/CoreBluetooth.h>
#include "peripheral.h"

#define IF(type, var, code) type var = code; if(var)

#if __MAC_OS_X_VERSION_MAX_ALLOWED < 1013
    std::string stateToString(CBCentralManagerState state);
#else
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunguarded-availability"
    std::string stateToString(CBManagerState state);
#pragma clang diagnostic pop
#endif


std::string getUuid(CBPeripheral* peripheral);
std::string getAddress(std::string uuid, AddressType* addressType);
std::vector<std::string> getServices(NSArray<CBService*>* services);
std::vector<std::pair<std::string, std::vector<std::string>>> getCharacteristics(NSArray<CBCharacteristic*>* characteristics);
std::vector<std::string> getDescriptors(NSArray<CBDescriptor*>* descriptors);
