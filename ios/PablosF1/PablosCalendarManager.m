#import "PablosCalendarManager.h"

@import EventKit;

@implementation PablosCalendarManager

RCT_EXPORT_MODULE(CalendarManager)

RCT_EXPORT_METHOD(addEvent:(NSString *)title startDate:(NSDate *)startDate endDate:(NSDate *)endDate location:(NSString *)location resolver:(RCTPromiseResolveBlock) resolver rejecter:(RCTPromiseRejectBlock)rejecter)
{
  EKEventStore *store = [[EKEventStore alloc] init];
  
  [store requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError * _Nullable error) {
    if(granted == NO || error!=nil){
      rejecter(@"500", @"Couldn't get access to the calendar", error);
      return;
    }
    
    EKEvent *event = [EKEvent eventWithEventStore:store];
    event.title = title;
    event.startDate = startDate;
    event.endDate = endDate;
    event.location = location;
    event.calendar = [store defaultCalendarForNewEvents];
    
    NSError *saveError = nil;
    [store saveEvent:event span:EKSpanThisEvent error:&saveError];
    
    if(saveError != nil){
      rejecter(@"500", @"Couldn't save event", saveError);
    }
    else
    {
      resolver(nil);
    }
  }];
}

@end
